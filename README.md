# Fun Camera 📸

A collective class app for Mobile Development. Each group of students owns exactly one camera screen in `groups/groupN/` and gives it a fun twist – a frame, a countdown, a photo booth strip, stickers and so on. The shared app (navigation, home screen, registry, helpers) is already done, so groups never edit the same files and merge conflicts are practically impossible.

Built with Expo (SDK 57), Expo Router, `expo-camera` and `expo-image-picker`. Runs in **Expo Go** on iOS and Android.

## What can your group build? 💡

Pick **one** idea and make it fun. Everything below works with the packages the app already has. ⭐ = easy, ⭐⭐ = medium, ⭐⭐⭐ = a real challenge. The word in `code` is where to start looking.

**Put something on top of the camera**

- 🖼️ **Frame it** ⭐ – a polaroid border, a "WANTED" poster or today's date stamped in the corner. Just `View`s and `Text` with `position: 'absolute'`.
- 🎨 **Color filters** ⭐ – a see-through colored layer on top (sepia, neon, night vision) with buttons to switch.
- 😎 **Stickers** ⭐⭐ – tap the photo to drop emojis where your finger is. `onPress` gives you `locationX` / `locationY`.

**Play with the camera itself**

- 🔍 **Zoom** ⭐ – plus and minus buttons, or a slider. `zoom` goes from 0 to 1.
- 🔦 **Flashlight** ⭐ – a torch button that turns the light on and off. `enableTorch`
- ⚡ **Flash modes** ⭐ – cycle through off / on / auto. `flash`
- 🪞 **Mirror selfie** ⭐⭐ – front camera, with the photo shown twice side by side. `facing`, `mirror`

**Play with time**

- ⏱️ **Countdown** ⭐⭐ – show 3‑2‑1 big on screen, then take the photo by itself. `setTimeout`
- 🎞️ **Photo booth strip** ⭐⭐ – four photos in a row, shown stacked like a strip from a photo booth.
- 🐢 **Time‑lapse** ⭐⭐⭐ – one photo every 2 seconds, then play them back fast like a flip book. `setInterval`

**Let the camera read things**

- 🔳 **QR scanner** ⭐⭐ – point at a QR code and show what it says. `onBarcodeScanned`
- 🗺️ **QR treasure hunt** ⭐⭐⭐ – hide QR codes around the room; the app ticks off each one it finds.

**Video**

- 🎬 **5‑second clip** ⭐⭐⭐ – a record button with a timer that counts up, and it stops at 5 seconds. `mode="video"`, `recordAsync`. Playing the clip back needs one extra package, so ask the teacher first.

**Use the gallery**

- 🟣 **Square profile picture** ⭐ – pick a photo, crop it square and show it round. `allowsEditing`, `aspect: [1, 1]`
- 🧩 **Collage** ⭐⭐ – pick up to 4 photos at once and show them as a 2 × 2 grid. `allowsMultipleSelection`

**Challenges and games**

- 🥕 **Photo challenge** ⭐⭐ – the app gives a random task ("Find something red!") and keeps a gallery of your answers.
- 🎯 **Mystery close‑up** ⭐⭐⭐ – show the photo blown up so big you only see a tiny piece, then zoom out a little every second until someone guesses what it is. `transform: [{ scale }]`

Got your own idea? Even better. Describe it to the teacher in one sentence.

## Run it

```bash
npm install
npx expo start          # scan the QR code with Expo Go
npx expo start --tunnel # if the network blocks the normal connection
```

Lint with `npm run lint`.

## Students

Read **[CONTRIBUTING.md](CONTRIBUTING.md)** before you start.

## Project layout

```
app/                         routes (home screen + group/[id])
components/shared/           useCameraSetup, PermissionGate, pickFromGallery
components/GroupErrorBoundary.js
groups/registry.js           list of all groups
groups/_starter/             untouched copy of the starter screen
groups/group1 … group9/      one folder per group
```

**Adding a group:** copy `groups/group9` to `groups/group10`, then add one import and one `group(...)` line in `groups/registry.js`.
