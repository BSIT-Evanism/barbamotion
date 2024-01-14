import React from 'react'
import GridLayout from 'react-grid-layout';

function GridComp() {
    const layout = [
        { i: "a", x: 0, y: 0, w: 1, h: 2, static: true },
        { i: "b", x: 1, y: 0, w: 3, h: 2, minW: 2, maxW: 4 },
        { i: "c", x: 4, y: 0, w: 1, h: 2 },
        { i: "d", x: 0, y: 0, w: 1, h: 2, static: true },
        { i: "e", x: 1, y: 0, w: 3, h: 2, minW: 2, maxW: 4 },
        { i: "f", x: 4, y: 0, w: 1, h: 2 },
        { i: "g", x: 0, y: 0, w: 1, h: 2, static: true },
        { i: "h", x: 1, y: 0, w: 3, h: 2, minW: 2, maxW: 4 },
        { i: "i", x: 4, y: 0, w: 1, h: 2 },
    ];
    return (
        <GridLayout
            className="layout h-screen w-full"
            layout={layout}
            cols={12}
            rowHeight={30}
            width={1200}
        >
            <div className='bg-platinum' key="a">a</div>
            <div className='bg-platinum' key="b">b</div>
            <div className='bg-platinum' key="c">c</div>
            <div className='bg-platinum' key="d">a</div>
            <div className='bg-platinum' key="e">b</div>
            <div className='bg-platinum' key="f">c</div>
            <div className='bg-platinum' key="g">a</div>
            <div className='bg-platinum' key="h">b</div>
            <div className='bg-platinum' key="i">c</div>
        </GridLayout>
    )
}

export default GridComp