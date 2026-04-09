import { promises as fs } from "node:fs";
import path from "node:path";

type DailyEmailLocks = Record<string, string>;
const BLOCK_WINDOW_MS = 24 * 60 * 60 * 1000;

function getDataDir(): string {
  if (process.env.RESERVA_LOCKS_DIR) {
    return process.env.RESERVA_LOCKS_DIR;
  }

  // In Vercel serverless, /tmp is writable while /var/task is read-only.
  if (process.env.VERCEL) {
    return path.join("/tmp", ".data");
  }

  return path.join(process.cwd(), ".data");
}

const DATA_DIR = getDataDir();
const LOCKS_FILE = path.join(DATA_DIR, "reserva-email-locks.json");

async function readLocks(): Promise<DailyEmailLocks> {
  try {
    const rawContent = await fs.readFile(LOCKS_FILE, "utf-8");
    const parsed = JSON.parse(rawContent) as DailyEmailLocks;

    if (!parsed || typeof parsed !== "object") {
      return {};
    }

    return parsed;
  } catch {
    return {};
  }
}

async function writeLocks(locks: DailyEmailLocks): Promise<void> {
  await fs.mkdir(DATA_DIR, { recursive: true });
  await fs.writeFile(LOCKS_FILE, JSON.stringify(locks, null, 2), "utf-8");
}

function normalizeEmail(email: string): string {
  return email.trim().toLowerCase();
}

export async function isEmailBlockedForToday(email: string): Promise<boolean> {
  const normalizedEmail = normalizeEmail(email);
  const locks = await readLocks();
  const lastSubmission = Number(locks[normalizedEmail]);

  if (!Number.isFinite(lastSubmission)) {
    return false;
  }

  return Date.now() - lastSubmission < BLOCK_WINDOW_MS;
}

export async function blockEmailForToday(email: string): Promise<void> {
  const normalizedEmail = normalizeEmail(email);
  const locks = await readLocks();
  const now = Date.now();

  const cleanedLocks: DailyEmailLocks = {};
  for (const [savedEmail, savedDate] of Object.entries(locks)) {
    const savedTimestamp = Number(savedDate);
    if (
      Number.isFinite(savedTimestamp) &&
      now - savedTimestamp < BLOCK_WINDOW_MS
    ) {
      cleanedLocks[savedEmail] = String(savedTimestamp);
    }
  }

  cleanedLocks[normalizedEmail] = String(now);
  await writeLocks(cleanedLocks);
}
