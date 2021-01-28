In `libs` you will find web component libraries developed in different ways.
In `targets` you will find apps from the main frameworks used today.

To use a web component library on a target, simply use `npm link`, example:
```
cd libs/vanilla-ds
npm link
```

and

```
cd targets/react-target-app
npm link vanilla-ds

```
