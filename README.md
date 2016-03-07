# table-fixed-header-bootstrap
Shows BootstrapTable Header on pagetop when scroll happens. Text-wrap and same width of table header as original Table

Include the 
```html 
table-fixed-header.js and table-fixed-header.css
```
And add
```html
class='psb-fixed-table'  to <table>
```

SAMPLE HTML:
```html
<html>
<head>
  <link rel="stylesheet" href="bootstrap.min.css">
  <link rel="stylesheet" href="table-fixed-header.css">
</head>
<body>
  <div class='container'>
    <div class='row'>
      <table class='table table-bordered psb-fixed-table'>
        <thead>
          <th></th>
        </thead>
        <tbody>
        </tbody>
      </table>  
    </div>
  </div>
  <script src="jquery.min.js"></script>
  <script src="table-fixed-header.js"></script>
</body>  
</html>  
```
