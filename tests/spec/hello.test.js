define(['hello'], function(hello){

    describe('hello', function(){


		describe('init', function(){
			var init = hello.init()

	        it('should return hello world', function(){
 	            expect(init).toEqual('hello world');
	        });
		});


		describe('conditional', function(){
			// In Jasmine 1.2 the function call below will be registered with istanbul
			// var cond = hello.conditional(false);
	        
	        it('should return a if predicate is true', function(){
	        	// In Jasmine 1.2 the function call below will not be registered with istanbul
	        	// so it will appear that the function was not was not called
				var cond = hello.conditional(false);
 	           	expect(cond).toEqual('a');
	        });
		});

    });

});