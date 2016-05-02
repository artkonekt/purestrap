# Purestrap Documentation

## Introduction

The component set is basically a mixture of purecss's grid system and several basic bootstrap components.

It also provides with a nice dead simple responsive layout that fits most of the devices used as of 2016.

### Why Another Toolset?

First, this toolkit has been created primarily for our own internal use, so don't use it if you don't like it.

Second, it's not aimed to completely replace bootstrap or foundation.

OK I described what not. This thing aims to overcome the following issues met during the years:

- Bootstrap by default forces me to use gutters between grid columns, while purecss doesn't
- Bootstrap3's grid system has had multiple issues/limitations (which problems are just about to be eliminated in BS4 btw)
- Most bootstrap themes seem to be "one of a kind"
- Customizing bootstrap oftean means taking a vanilla bootstrap CSS and overwriting it, resulting in a messy and ineffective CSS
- There are many nice [tools](http://getbootstrap.com/customize/) for [customizing](http://bootstrap-live-customizer.com/) bootstrap but none of them actually fits my workflow
- Wanted to have edit directly the sass source files during development
- Wanted to have a clean css at the end of the day (no)
- Bootstrap's configuration/theming option set is overcomplicated which I never was able to grasp completely
- With all that, bootstrap is still a very nice animal and all my workmates know it, so no need to reinvent the wheel and replace `<div class="alert alert-info">meh</div>` and all the stuff like that.

## Let's Start!

- [File And Folder Structure](folders.md)
- [Configuration, Customization](configuration.md)
- [Layout](layout.md)
- [Fonts](fonts.md)

