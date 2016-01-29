# Feedback Widget

This website feedback widget opens a GitHub issue with the user's feedback, the URL they were on when they provided the feedback, and user agent info (browser, OS, etc). Once the user submits their feedback, they are given the URL for the new GitHub issue.

This is currently live on [beta.FEC.gov](https://beta.fec.gov) and 

## Usage

To add to your site, add the following to your `<head>`:

```html
<script src="widget.js"></script>
<script>
  new FeedbackWidget(url);
</script>
```

You can optionally pass in a target element where you want the widget to be added:

```javascript
var element = document.getElementById('...'); // or whatever
new FeedbackWidget.init(url, element);
```

## Development

### API

This repository also includes an API for collecting the data.

1. Install the dependencies.
    * Python
    * PostgreSQL
1. Run:

    ```bash
    pip install -r requirements.txt
    python app.py
    ```

### Widget

1. Make changes to [`widget.js`](widget.js).
1. Install the dependencies.
    * Node
1. Run:

    ```bash
    npm run build
    ```

The new build will be placed in `widget.dist.js`. Open `index.html` in your browser to test it.
