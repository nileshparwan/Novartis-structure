
import { render,cleanup } from "@testing-library/react";
import { Header } from "@components/header";

describe("App Component", function () {

    afterEach(()=>{
        cleanup();
    });

    it("renders some text", () => {
        const { getByText } = render(<Header onLogin={()=>{}} onLogout={()=>{}} onCreateAccount={()=>{}}/>);
        const linkElement = getByText("acme");
        expect(linkElement).toBeTruthy();
    })


    it('should take a snapshot', () => {
        const headercomponent = (<Header onLogin={()=>{}} onLogout={()=>{}} onCreateAccount={()=>{}}/>);
    
        const { asFragment } = render(headercomponent);
        
        expect(asFragment).toMatchSnapshot(); 
    });
});