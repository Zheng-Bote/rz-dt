<div id="top" align="center">

# rz-dt

A Web Component for HTML date-/time- format

defined output of timezone, format and datetime

</div>

## Authors

- [@Zheng-Bote](https://www.github.com/Zheng-Bote)

## Version

v0.1.0

## License

[MIT](https://choosealicense.com/licenses/mit/)

## API Reference

#### Parameters

```
    <rz-dt></rz-dt>
```

```
    <rz-dt
       tz="Europe/Berlin"
       format="de-DE"
       fulldatetime="yes"
    >
    </rz-dt>
```

| Parameter      | Type     | Description                                         |
| :------------- | :------- | :-------------------------------------------------- |
| `tz`           | `string` | **Optional**. "timezone" default: "Europe/Berlin" |
| `format`       | `string` | **Optional**. "output-format" default: "de-DE"    |
| `fulldatetime` | `string` | **Optional**. "yes" "no" default: "yes"         |
| `justdate`     | `string` | **Optional**. "yes" "no" default: "no"          |
| `justtime`     | `string` | **Optional**. "yes" "no" default: "no"          |

## Installation

used folder structure

```bash
.
├── assets
│   ├── css
│   │   └── index.css
│   └── js
│       └── rz-dt.js
├── favicon.ico
├── index.html


```

## Usage/Examples

```html
<!DOCTYPE html>
<html lang="en" data-theme="light">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="author" content="ZHENG Robert" />

    <title>Web Component</title>

    <meta name="description" content="Web Component for HTML footer" />
    <meta name="version" content="v0.1.0" />
    <meta name="author" content="ZHENG Robert" />
    <meta name="date" content="2016-01-02T01:30:00+01:00" />

    <link rel="alternate icon" href="/assets/favicon.ico" />
    <link rel="shortcut icon" href="/assets/favicon.ico" type="image/x-icon" />

    <link href="../assets/css/index.css" rel="stylesheet" type="text/css" />
  </head>

  <body id="body">
    <main>
      <h1>Web Component &raquo; rz-dt &laquo;</h1>
      <article>
        <h2>A Web Component for HTML date-/time- format</h2>
        <p class="brief">defined output of timezone, format and datetime</p>
        <section>
          <h3>default</h3>
          <p>
            <rz-dt></rz-dt>
            <br />
            <code>
              &lsaquo;rz-dt tz="Europe/Berlin" format="de-DE"
              fulldatetime="yes"&rsaquo;&lsaquo;/rz-dt&rsaquo;
            </code>
          </p>
        </section>

        <section>
          <h3>just date</h3>
          <p>
            <rz-dt justdate="yes"></rz-dt>
            <br />
            <code>
              &lsaquo;rz-dt justdate="yes"&rsaquo;&lsaquo;/rz-dt&rsaquo;
            </code>
          </p>
        </section>
        <section>
          <h3>just time</h3>
          <p>
            <rz-dt justtime="yes"></rz-dt>
            <br />
            <code>
              &lsaquo;rz-dt justtime="yes"&rsaquo;&lsaquo;/rz-dt&rsaquo;
            </code>
          </p>
        </section>
        <section>
          <h3>Timezone Asia/Shanghai</h3>
          <p>
            <rz-dt tz="Asia/Shanghai"></rz-dt>
            <br />
            <code>
              &lsaquo;rz-dt tz="Asia/Shanghai"&rsaquo;&lsaquo;/rz-dt&rsaquo;
            </code>
          </p>
        </section>
        <section>
          <h3>format en-GB</h3>
          <p>
            <rz-dt tz="Asia/Shanghai" format="en-GB"></rz-dt>
            <br />
            <code>
              &lsaquo;rz-dt tz="Asia/Shanghai"
              format="en-GB"&rsaquo;&lsaquo;/rz-dt&rsaquo;
            </code>
          </p>
        </section>
      </article>
    </main>
    <script src="./assets/js/rz-dt.js"></script>
  </body>
</html>
```

## Screenshots

  <img src="https://raw.githubusercontent.com/Zheng-Bote/rz-dt/main/assets/img/Screenshot.png" width="100%" height="auto" />

## Used By

This web component is used by the following web sites:

- [hase-zheng.net: Micro-Frontends and Microservices](https://www.hase-zheng.net)
- [Robert Zheng Landing Page](https://www.robert.hase-zheng.net)
- [Points of Interest: Geo-Coordinates and Photos of POI's](https://www.flag-me.info/)
- [ZHENG Bote: private travel photos](https://www.bote.hase-zheng.net/)
- [DigiDocuDev: web-based documentation management](https://www.digidocu.dev/)

### the end

:vulcan_salute:

<p align="right">(<a href="#top">back to top</a>)</p>
