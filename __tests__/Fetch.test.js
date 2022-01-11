import React from 'react';
import {render,screen,cleanup, waitFor} from '@testing-library/react';
//import {} from '@testing-library/jest-dom'

import Fetch from '../components/Fetch';
import mockAxios from 'axios';

afterEach(()=>{
    cleanup
})

test("test URL", async () => {
    
    mockAxios.get.mockResolvedValueOnce({data: {greeting: "hello there"}})
    
    const url = "/greeting" ;
    const {getByTestId} = render(<Fetch url={url} />)
    expect(getByTestId('loading')).toHaveTextContent("Loading data...")
    //const resolvedSpan =   await waitFor (() => getByTestId("resolved"))
    //expect(resolvedSpan).toBeInTheDocument("hello there")
    //await waitFor(() => expect(getByTestId("resolved")).toBeInTheDocument("hello there"))
    await waitFor(() => expect(mockAxios.get).toHaveBeenCalledTimes(1))
    await waitFor(() => expect(mockAxios.get).toHaveBeenCalledWith(url))
})