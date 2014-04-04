 
   /**
   * @package Bootloader
   * @version v0.1
   * @author  Lee Howarth
   */
   
   !(function($) 
   {
      'use strict';   
      
      $.boot = function( data )
      {
          var load = function( callback )
          {
              $.onload = callback();
          };
          
          var drop = function( src )
          {      
              var type  = src.split( '.' ).pop();
              
              var data;
              
              switch ( type )
              {
                  case 'js':  
                  
                       data = document.createElement( 'script' );
                  
                       data.setAttribute( 'src', src );
             
                       break;
                       
                  case 'css': 
                  
                       data = document.createElement( 'link' );
                   
                       data.setAttribute( 'rel', 'stylesheet' );
                   
                       data.setAttribute( 'href', src );
                            
                       break;
                       
                  default:
                       return;
              }
              
              document.getElementsByTagName( 'head' )[ 0 ].appendChild( data );
          };
          
          var type = typeof data;    
          
          if ( type == 'object' && typeof data.load == 'object' )
          {
               data.load.forEach( function( value, index, array )
               {
                   drop( value );
               } );
               
               if ( data.success != undefined )
               {
                   load( data.success );
               }
          }
   
          else if ( type == 'function' )
          {
               load( data );
          }
          
          else if ( type == 'string' )
          {
               drop( data );
          }
 
          return this;
      };
      
   })(window);
