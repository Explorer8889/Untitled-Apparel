import fs from 'fs';
import path from 'path';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { email } = req.body;
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return res.status(400).json({ error: 'Invalid email' });
  }

  const filePath = path.join(process.cwd(), 'waitlist-emails.json');
  let emails = [];
  try {
    emails = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  } catch {
    // File doesn't exist yet, start empty
  }

  emails.push({ email, timestamp: new Date().toISOString() });
  fs.writeFileSync(filePath, JSON.stringify(emails, null, 2));

  res.status(200).json({ success: true, message: "You're on the list!" });
}