export const gitBasics = [
  {
    id: "basic-1",
    number: "01",
    command: "git --version",
    note: "Checks your currently installed Git version."
  },
  {
    id: "basic-2",
    number: "02",
    command: 'git config --global user.name "Your Name"',
    note: "Sets the name you want attached to your commit transactions."
  },
  {
    id: "basic-3",
    number: "03",
    command: 'git config --global user.email "you@example.com"',
    note: "Sets the email you want attached to your commit transactions."
  },
  {
    id: "basic-4",
    number: "04",
    command: "git config --list",
    note: "Shows all your configured settings."
  },
  {
    id: "basic-5",
    number: "05",
    command: "git init",
    note: "Initializes a new Git repository in the current directory."
  },
  {
    id: "basic-6",
    number: "06",
    command: "git status",
    note: "Shows the status of changes as untracked, modified, or staged."
  },
  {
    id: "basic-7",
    number: "07",
    command: "git add .",
    note: "Stages all changed files for the next commit."
  },
  {
    id: "basic-8",
    number: "08",
    command: 'git commit -m "Your descriptive message"',
    note: "Commits the staged snapshot to the project history."
  },
  {
    id: "basic-9",
    number: "09",
    command: "git show",
    note: "Shows the changes introduced by the most recent commit."
  }
];

export const gitHubFlow = [
  {
    id: "hub-1",
    number: "10",
    command: "git clone <url>",
    note: "Downloads a project and its entire version history.",
    hint: "GitHub = online code storage"
  },
  {
    id: "hub-2",
    number: "11",
    command: "git remote add origin <url>",
    note: "Connects your local repository to a remote server."
  },
  {
    id: "hub-3",
    number: "12",
    command: "git push -u origin main",
    note: "Uploads all local branch commits to the remote.",
    hint: "Push = upload code"
  },
  {
    id: "hub-4",
    number: "13",
    command: "git pull",
    note: "Downloads bookmarks and history from remote, then incorporates changes.",
    hint: "Pull = download code"
  },
  {
    id: "hub-5",
    number: "14",
    command: "git branch",
    note: "List all branches"
  },
  {
    id: "hub-6",
    number: "15",
    command: "git branch feature-1",
    note: "Create a new branch"
  },
  {
    id: "hub-7",
    number: "16",
    command: "git checkout feature-1",
    note: "Switch to a branch"
  },
  {
    id: "hub-8",
    number: "17",
    command: "git switch feature-1",
    note: "Modern way to switch branch"
  },
  {
    id: "hub-9",
    number: "18",
    command: "git merge feature-1",
    note: "Merge branch into current branch"
  },
  {
    id: "hub-10",
    number: "19",
    command: "git push origin feature-1",
    note: "Push branch to GitHub"
  }
];

export const sshSetup = [
  {
    id: "ssh-1",
    number: "20",
    command: 'ssh-keygen -t ed25519 -C "your_email@example.com"',
    note: "Generates a new SSH key.",
    hint: "Press Enter for all prompts"
  },
  {
    id: "ssh-2",
    number: "21",
    command: 'eval "$(ssh-agent -s)"',
    note: "Starts the ssh-agent in the background."
  },
  {
    id: "ssh-3",
    number: "22",
    command: "ssh-add ~/.ssh/id_ed25519",
    note: "Adds your SSH private key to the ssh-agent."
  },
  {
    id: "ssh-4",
    number: "23",
    command: "cat ~/.ssh/id_ed25519.pub",
    note: "Outputs your public key. Copy this.",
    hint: "Copy and paste into GitHub settings"
  },
  {
    id: "ssh-5",
    number: "24",
    command: "ssh -T git@github.com",
    note: "Tests your SSH connection to GitHub."
  }
];

export const allCommands = [...gitBasics, ...gitHubFlow, ...sshSetup];
