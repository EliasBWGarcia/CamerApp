# Contributing – Fun Camera 📸

Welcome! Your group builds **one camera screen** with a fun twist. Everything else is already done.

## 1. Setup (5 minutes)

**One person per group:**

1. Open https://github.com/joneikholmkea/CamerApp and click **Fork**. You now have your own copy.
2. On your fork: **Settings → Collaborators → Add people** and add your two teammates.

**Everyone in the group** (teammates: accept the invite first):

```bash
git clone https://github.com/<fork-owner>/CamerApp.git
cd CamerApp
npm install
npx expo start
```

- Install **Expo Go** on your phone and scan the QR code (iPhone: use the Camera app).
- Your phone and laptop must be on the **same Wi-Fi**.
- School Wi-Fi blocking it? Try `npx expo start --tunnel`.

## 2. The golden rule 🥇

**Only edit files inside your own `groups/groupN/` folder.**

- ✅ Edit `groups/groupN/index.js`, add new files like `groups/groupN/Sticker.js`
- ❌ Don't edit `app/`, `components/`, `groups/registry.js`, `package.json` or any config file
- ❌ Don't install new packages

A robot checks every pull request and will complain if you change files outside your folder.

## 3. Git workflow

The fork owner creates the group branch once:

```bash
git checkout -b group-N          # e.g. group-3
git push -u origin group-N
```

Teammates get it:

```bash
git fetch
git checkout group-N
```

Then everyone works like this:

```bash
git pull                         # get your teammates' changes first
# ...work...
git add groups/groupN
git commit -m "Add countdown"    # commit often!
git push
```

Before the deadline, open **one pull request** from your fork's `group-N` branch into `main` of **joneikholmkea/CamerApp**. GitHub shows a **Contribute → Open pull request** button on your fork. The teacher reviews and merges all PRs.

> 💡 This fork → branch → pull request flow is how people contribute to open-source projects. In a company team you usually skip the fork and push branches to one shared repo, but the pull request part is the same.

## 4. Rename your screen

Edit `meta` at the top of your file – the home screen updates automatically:

```jsx
export const meta = {
  title: 'Countdown Cam',
  emoji: '⏱️',
};
```

## 5. I broke everything 😱

Copy the starter back into your file:

```bash
cp groups/_starter/CameraStarter.js groups/groupN/index.js
```

Then set your `meta` again. (If the app crashes on your screen, the rest of the app still works – you'll see a red error message instead.)

## 6. No camera?

Simulator or broken camera? Use the **🖼️ Gallery** button to pick a photo instead.

## 7. Ideas

The list of feature ideas is at the top of your `index.js`. Pick one, or invent your own and get a quick OK from the teacher.

**Tip:** overlays are just `View`s, `Text`s and emojis with `position: 'absolute'`, placed next to the `CameraView` (never inside it). Look for the `🎨 YOUR OVERLAY GOES HERE` comments.

## 8. Time plan (90 min)

| Time      | What                                                   |
| --------- | ------------------------------------------------------ |
| 0–10 min  | Teacher demo, form groups, clone and run               |
| 10–20 min | Pick an idea and tell the teacher in one sentence      |
| 20–75 min | Build!                                                 |
| 75 min    | Open your pull request                                 |
| 75–90 min | Merge and demo on the projector (~90 seconds per group) |
