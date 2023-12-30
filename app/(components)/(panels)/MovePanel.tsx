// "use client";

import { useState } from "react"

export default function MovePanel() {
    return (
        <div className="grid grid-cols-1 justify-start">
            <h3>History:</h3>
            <div id="move-history" className="grid grid-cols-1">
            </div>
        </div>
    )
}