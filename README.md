Bootloader
==========

Javascript Bootloader / Dependency Injection.

This is a very simple way of injecting things such as javascripts, css files when you need them instead of attempting to load everything at once.

Example Usage

You can find a few examples in the examples folder, inline js should work also something like this could be useful.

```
<script>
boot( { load: [ 'static/js/example.js' ], success: function()
{
    /* Perhaps we need to notify a script of our presence. */
    var xhr = new XMLHttpRequest();
           
    xhr.open( 'GET', '/some/url', false );
       
    xhr.send(); 
} } );
</script>
```
