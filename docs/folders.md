# File And Folder Structure

## The `sass` Folder

The `sass` folder contains the ham in this repo.

The idea is that you take the `sass` folder, copy it to your project, use/throw the modules you want, and then start the customization/development. So at the end of the day you won't have to upgrade the underlying purestrap. This is rather a boilerplate concept.

`purestrap.sass` is the glue for all the parts and modules. You can either rename it or even have multiple variants of it. It's also the intended way to remove modules/parts you don't want, or to add completely new ones depending on your project's needs.

##### Folders

```
base/               <- Base elements
configuration/      <- Configuration files
   integrations/    <- Integration related config files
   modules/         <- Module config files
integrations/       <- Style implementation of integrations
layout/             <- Layout and base style implementation
modules/            <- Module implementation files
states/             <- State implementation files
utils/              <- Utilities by purestrap
vendor/             <- Vendor stuff that is completely integrated
   normalize/       <- Normalize.css (sass variant) is the lowest foundation
```

#### The `base` folder

It contains `_base.sass` and `_variables.sass`.

From Jonathan Snook's SMACSS book:

> A Base rule is applied to an element using an element selector, a
 descendent selector, or a child selector, along with any pseudo-
 classes. It doesn’t include any class or ID selectors. It is defining the default styling for how that element should look in all occurrences
 on the page.

`_base.sass` is the file for that.

`_variables.sass` is the source of common customizations, like colors, fonts, margins, etc to be consistent across modules thus through the entire site. It actually glues several configuration files

#### The `states` folder

These are similar to modules, but they're not primarily visible things but complement behaviors defined by javascript components.

#### The `integrations` folder

Whenever your project customizes, defines a theme for an external component (eg. owl carousel) you can put the corresponding file here.

#### The `layout` folder

Again, in the SMACSS book:

> CSS, by its very nature, is used to lay elements out on the page.
  However, there is a distinction between layouts dictating the major
  and minor components of a page. The minor components—such as
  a callout, or login form, or a navigation item—sit within the scope
  of major components such as a header or footer. I refer to the mi-
  nor components as Modules and will dive into those in the next sec-
  tion. The major components are referred to as Layout styles.

So, this is where all these files go.

#### The `modules` folder

SMACSS is a bible, isn't it:

> As briefly mentioned in the previous section, a Module is a more
  discrete component of the page. It is your navigation bars and your
  carousels and your dialogs and your widgets and so on. This is the
  meat of the page. Modules sit inside Layout components. Modules
  can sometimes sit within other Modules, too. Each Module should
  be designed to exist as a standalone component. In doing so, the
  page will be more flexible. If done right, Modules can easily be
  moved to different parts of the layout without breaking

#### The `utils` folder

As expected, they're utils, mixins, etc.

#### The `vendor` folder

It currently only contains the [sass port](https://github.com/JohnAlbin/normalize-scss/) of [normalize](https://github.com/necolas/normalize.css). Since both bootstrap and purecss are built on top of this goodie, Purestrap also incorporates it.

Purestrap is shipping with normalize v4.2.0 and it's configuration (variables) is connected to Purestrap's variables.