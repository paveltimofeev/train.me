'use strict';

/* https://github.com/angular/protractor/blob/master/docs/toc.md */

describe('trainme app test', function(){
  
    browser.get('exiciseDescription.html');
    
    it('should automatically redirect to today.html after clicking on Yes button', function(){
        element(by.css(':button')).click();
        expect(browser.getLocationAbsUrl()).toMatch("/today");
    });
    
    
    describe('Testing Today page', function(){
      
      
      beforeEach(function(){
        browser.get('/today');
      });
      
      
      it('should redirect to Done after clicking on Done button', function(){
        
        ///?
        expect(browser.getLocationAbsUrl()).toMatch("/done");
      });
      
      it('should redirect to Fault after clicking on Done button', function(){
        
        ///?
        expect(browser.getLocationAbsUrl()).toMatch("/fault");
      });
      
    });
});






























































