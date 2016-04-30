# Configuration

Configuration (customization) is the heart of this thing. The meaning of this framework is exactly that a website should exactly look as it is intended to be, but without coding the repetitive parts from scratch over and over again.

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