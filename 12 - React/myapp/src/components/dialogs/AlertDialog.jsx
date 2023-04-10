import { useEffect, useState } from "react"

export default function AlertDialog({visible, message}) {
    const [showed, setVisibility] = useState(visible);

    useEffect(() => {
        setVisibility(visible);
    }, [visible])
    return (
        <>
            {showed && <>
                <div className='alert-dialog'>{message}</div>
                <div className="page-dimming" onClick={() => { setVisibility(false) }}></div>
            </>
            }
        </>
    )
}