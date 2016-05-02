# Configuration

Configuration (customization) is the heart of this thing. The meaning of this framework is that a website should exactly look as it is intended to be, but without coding the repetitive parts from scratch over and over again.

## Variables

The primary customization can be done via variables.

### Colors

Colors need to be set in the `configuration/_colors.sass` file and/or in the respective modules's own configuration file.

Color set in the main `_colors.sass` file MUST be prefixed with `cl-` eg. `$cl-separator`.

### Fonts

Typography configuration values including font sizes has to be set in `configuration/_fonts.sass`.

Variables MUST be prefixed with `font-` eg. `$font-copy` or `$font-size-base`.

### Sizing

Sizing related configuration values (padding, margins, etc) have to be set in `configuration/_sizing.sass`.

Size variables MUST be prefixed with `siz-` eg. `$siz-border-radius-base`.

### Module Variables

Each module has its own configuration in `configuration/modules/_modulename.sass`.

Module configurations can have any settings like color, font, sizing, etc.

Module related variables MUST be prefixed with the module's name eg. `$alert-padding`.

## Module Dependencies

Generally you should avoid creating modules that depend on another module. Modules should only depend on "framework" configuration like colors, sizing, fonts, etc.

Module configuration should generally be kept in the module's own configuration file. However, [avoid overconfiguration](#avoid-unnecessary-complexity) that leads to overcomplication.

In case a module is a sub-module of another, consider keeping them together in a single file (like `btn` and `btn-xl` or `btn-danger`). If it results in a mammoth module, put it in a separate file, but make it obvious by prefixing (eg. `_menu.sass`, `_menu-account.sass`) or by putting in a separate folder (eg. `menu/_account.sass`).

It's neither evil to have a module that is not a submodule of another but depends on it (still, try to avoid it). In such cases keep all the direct dependencies in the module configuration.

Example:

```sass
//  configuration/modules/_modal.sass
@import "panel"

$modal-cl-footer-bg: $panel-cl-bg

//  modules/_modal.sass
@import "../configuration/modules/_modal.sass

.modal-footer
    background-color: $modal-cl-footer-bg
```

The idea above is that even though the modal footer color is bound the panel's color, the dependency is kept in the modal's module configuration and not in the module itself. This way it's a bit more decoupled.

## Avoid Unnecessary Complexity
It's absolutely OK for a module to directly import variables from the framework (colors, fonts, sizing).

It's absolutely OK to do this for example:

```sass
//  modules/_tables.sass:
@import "../configuration/fonts"
@import "../configuration/modules/table"

.table
    th
        font-family: $font-heading
        color: $cl-text-heading
    td
        font-family: $font-copy
        color: $cl-text-secondary
```

instead of this:

```sass
//  configuration/modules/_tables.sass
@import "../fonts"

$table-font-heading: $font-heading
$table-font-cells: $font-copy
$table-cl-heading: $cl-text-heading
$table-cl-cells: $cl-text-secondary

//modules/_tables.sass:
@import "../configuration/fonts"
@import "../configuration/modules/table"

.table
    th
        font-family: $table-font-heading
        color: $table-cl-heading
    td
        font-family: $table-font-cells
        color: $table-cl-cells
```

Neither the latter variant is evil, however consider the simplicity vs flexibility issue. In this example, you have to anwser the following question:

*- Is it really needed tables to have a distinct font stack/color from other elements of the system?*

If the answer is **yes** the second variant is the viable option. If the answer is **no** or **maybe in the future**, go with the simple one. You'll fix it in the future when it's going to be an actual necessity. Don't be overly future-proof, most probably you can'y predict what's exactly going to happen.
