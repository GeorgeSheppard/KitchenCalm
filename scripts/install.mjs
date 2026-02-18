import { execSync } from "child_process";

try {
  console.log("Running yarn install...");
  const output = execSync("cd /vercel/share/v0-project && yarn install", {
    encoding: "utf-8",
    stdio: "pipe",
  });
  console.log(output);
  console.log("yarn install completed successfully.");
} catch (error) {
  console.error("yarn install failed:", error.message);
  if (error.stdout) console.log("stdout:", error.stdout);
  if (error.stderr) console.error("stderr:", error.stderr);
}
