define(['hello'], function(hello){

    describe('hello', function(){


		describe('init', function(){
			var init = hello.init()

	        it('should return hello world', function(){
 	            expect(init).toEqual('hello world');
	        });
		});


		describe('conditional', function(){

	        it('should return a if predicate is true', function(){
	        	// this function is registered with istanbul in version 2 of jasmine
				var cond = hello.conditional(false);
 	           	expect(cond).toEqual('a');
	        });
		});

    });

});