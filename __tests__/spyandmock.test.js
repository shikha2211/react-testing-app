
describe ("Illustate mocks and spies" , () => {

    test("Illustrate mocks" , () => {
        const greeter= require("../components/spyandmock.js");
        const mock=jest.fn().mockReturnValue("mocked name");
        greeter.getfullName =mock;

        const result = greeter.greet("shikha" , "kalyan")
        console.log(result);

        expect(result).toBe("Hello! mocked name");
        expect(mock).toHaveBeenCalled();
        expect(mock).toHaveBeenCalledTimes(1)
    })   

    test("Illustrate spies" , () =>{
        const greeter = require("../components/spyandmock.js");
        const greeterSpy=jest.spyOn(greeter,'getfullName');

        expect(greeterSpy).toHaveBeenCalled();
        expect(greeterSpy).toHaveBeenCalledWith("shikha" , "kalyan");
    })
}) 