---
layout: default
title: Fonts
---
# Fonts

The framework itself doesn't import fonts, so it's up to you whether to import fonts from Google fonts or Typekit, etc or to host them locally.

The framework however defines several simple settings to use for unified font experience regarding the end result.

## Real And Semantic Font Names

Every project has a different font stack like, Lato or Proxima Nova or Robot, etc. These are the **real font names**.

There is also another 'layer' of fonts like the font used for *copy* (normal text), font for *heading*, another for from inputs, sometimes a separate font for small text for better readability, etc. These are the **semantic font names**.

In order to prevent you from creating a mess and for make it less painful to change fonts later, the framework encourages you to use both in a certain manner.

Actual font names you set only once, and store it in a real font name variable:

```
$font-roboto: Roboto, sans-serif
$font-roboto-slab: 'Roboto Slab', sans-serif
```

When defining semantic names use real font name variables:

```
$font-copy:    $font-roboto
$font-heading: $font-roboto-slab
$font-small:   $font-roboto
```

Therefore, your modules must use only semantic names. This not only helps to maintain a standard look&feel but also makes it easy to easily setup and change.

So you'll end up with something like this:

```
$font-roboto: Roboto, sans-serif
$font-roboto-slab: 'Roboto Slab', sans-serif

$font-copy: $font-roboto
$font-heading: $font-roboto-slab

/* _base.sass: */
body
    font-family: $font-copy

h1, h2, h3, h4
    font-family: $font-heading

/* _menu.sass: */
.menu
    font-family: $font-copy

.menu-title
    font-family: $font-heading

/* _button.sass: */
.btn
    font-family: $font-copy

.btn-sm, .btn-xs
    font-family: $font-small

```

instead of something like that:

```
$font-roboto: Roboto, sans-serif
$font-roboto-slab: 'Roboto Slab', sans-serif

/* _base.sass: */
body
    font-family: $font-roboto

h1, h2, h3, h4
    font-family: $font-roboto-slab

/* _menu.sass: */
.menu
    font-family: $font-roboto

.menu-title
    font-family: $font-roboto-slab

/* _button.sass: */
.btn
    font-family: $font-roboto

.btn-sm, .btn-xs
    font-family: $font-roboto

```

In this case your module would have a direct dependency on your choice of font. This is pretty much like the [dependeny injection pattern](
https://en.wikipedia.org/wiki/Dependency_injection).
