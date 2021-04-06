# hugo-universal-collapsible
A Hugo plugin for collapsible sections using only vanilla JavaScript and CSS.

The tag is split into 2 sections - `above` and `below` the fold.
Arbitrarily complex Markdown and HTML content is supported in either section. You can even nest multiple collapsibles!

# Installation
Copy the `layouts` and `static` folders to your Hugo site root. Ensure that the CSS and JS files are copied over to your output (`public`) folder when rendering. The expectation is that they will be accessible at `<BaseURL>/<ext>/collapse.<ext>`. This can be changed as needed in `collapse.html`.

If one of the sections (`above`/`below`) contains HTML (e.g. from another shortcode), you might have to enable unsafe rendering in `config.toml` (depending on your Hugo version):

```
[markup]
  [markup.goldmark]
    [markup.goldmark.renderer]
      unsafe = true
```

# Demo

```
{{< collapse >}}
{{< collapse/above >}}
The following section is too long...
{{< /collapse/above >}}
{{< collapse/below >}}
Lorem ipsum dolor sit amet, consectetur adipiscing elit.

  {{< collapse >}}
  {{< collapse/above >}}
  I'm nested!
  {{< /collapse/above >}}
  {{< collapse/below >}}
  Aenean lacinia condimentum magna ac tincidunt.
  {{< /collapse/below >}}
  {{< /collapse >}}

{{< /collapse/below >}}
{{< /collapse >}}
```

![demo](demo/demo.gif)

Credit for JS/CSS:

Jason Knight
https://levelup.gitconnected.com/collapsible-sections-with-or-without-javascript-3fd871955a9d
