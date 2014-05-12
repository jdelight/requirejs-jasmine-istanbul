define(['hello'], function(hello){

    describe('hello', function(){

        it('should do something', function(){
            expect(true).toEqual(true);
            expect(hello.init()).toEqual('hello world');
        });

    });

});