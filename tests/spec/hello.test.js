define(['hello'], function(hello){

    describe('hello', function(){


		describe('init', function(){
	        it('should return hello world', function(){
 	            expect(hello.init()).toEqual('hello world');
	        });
		});


		describe('conditional', function(){
	        it('should return a if predicate is true', function(){
 	            expect(hello.conditional(true)).toEqual('a');
	        });
		});

    });

});