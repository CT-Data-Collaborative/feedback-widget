# Feedback Widget

An experimental widget to add feedback buttons to your page.

## Usage

To add to your site, add the following to your `<head>`:

```html
<script src="widget.js"></script>
<script>
  FeedbackWidget.init();
</script>
```

You can optionally pass in a target element where you want the widget to be added:

```javascript
var element = document.getElementById('...'); // or whatever
FeedbackWidget.init(element);
```

## Development

This repository also includes an API for collecting the data.

1. Install the dependencies
    * Python
    * VirtualEnv (recommended)
    * PostgreSQL
1. Run:

    ```bash
    pip install -r requirements.txt
    python app.py
    ```

1. Open `index.html` in your browser.
