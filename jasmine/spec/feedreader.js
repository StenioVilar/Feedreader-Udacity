/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */

$(function() {
	
	 /* Test suite named "RSS Feeds" */
	
    describe('RSS Feeds', function() {
    	
       
    	/* RSS Feeds defined */
    	
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        /* URL not empty from RSS Feeds */        
        
        it('URL is not empty', function() {           
           allFeeds.forEach(function(feed) {
        	    expect(feed.url).not.toBe(''); 
        	});
        });
        
        /* Name not empty from RSS Feeds */       
        
        it('name is not empty', function() {
        	 allFeeds.forEach(function(feed) {
         	    expect(feed.name).not.toBe(''); 
         	});
         });
        
    });


    /* Test suite named "The menu" */
    
    describe('The menu', function() {
    	    	
         /* Menu is hidden by default */      

         it('menu is hidden', function() {
             expect(idMenu).toHaveClass('menu-hidden');
         });

         /* Menu is hiding/showing on click */      
         
         it('menu is hiding/showing on click', function() {
        	 var menuIcon = $('.menu-icon-link');
         	 menuIcon.click();
             expect(idMenu).not.toHaveClass('menu-hidden');
        	 menuIcon.click();
        	 expect(idMenu).toHaveClass('menu-hidden');
         });
    	
    });
        
    /* Test suite named "Initial Entries" */

    describe('Initial Entries', function() {
    	
    	beforeEach(function (done) {
    		loadFeed(0, done);
    	});
    	
        /* Need at least one entry */      
    	
    	it('at least one entry', function() {
    		var entry = $('.feed .entry'); // all .entry elements inside .feed
            expect(entry.length).toBeGreaterThan(0);
        });
    	
    });
    
   /* Test suite named "New Feed Selection" */
        
   describe('New Feed Selection', function() {
    	
	   var firstFeed,secondFeed;
   
       beforeEach(function (done) {
    	   loadFeed(1, done);
    	   firstFeed =  $('.feed').html();
    	   loadFeed(2, done);
       });
       
       /* Ensure a feed change */
	
       it('feed could change', function() {
           secondFeed = $('.feed').html();
    	   expect(secondFeed).not.toEqual(firstFeed);
       });
	
   });
   	
    
}());
