# table-fixed-header-bootstrap
Shows HTML Table Header **fixed** on top on page scroll

Include the **table-fixed-header.js** and **table-fixed-header.css**

And add **class='psb-fixed-table'**  to *table tag* as shown below:


SAMPLE PAGE HTML:
```html
<html>
<head>
  <link rel="stylesheet" href="bootstrap.min.css"> <!-- works only with bootstrap -->
  <link rel="stylesheet" href="table-fixed-header.css"> <!-- must include -->
</head>
<body>
  <div class='container'>
    <div class='row'>
      <table class='table table-bordered psb-fixed-table'><!-- must include psb-fixed-table class -->
        <thead><!-- element must be available -->
          <th></th> <!-- element must be available -->
        </thead>
        <tbody>
        </tbody>
      </table>  
    </div>
  </div>
  <script src="jquery.min.js"></script> <!-- must include jquery -->
  <script src="table-fixed-header.js"></script><!-- must include -->
</body>  
</html>  
```

###Limitations in current Version
- works with single table on page
- works with single bootstrap *container*/*container-fluid* tag in page
- fixed header tag appears at *300px* scroll and need to be changed manually
- does not include support for all bootstap table classes e.g. *table-condensed*
