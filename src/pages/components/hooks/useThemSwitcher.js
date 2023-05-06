import React, { useEffect, useState } from 'react'

function useThemSwitcher() {
    const preferDarkQuery = "(prefers-color-scheme: dark)"
    const [mode, setMode] = useState("")

    useEffect(() => {
        const mediaQuery =window.matchMedia(preferDarkQuery)
        const userpref = window.localStorage.getItem('theme')

        const handleChange = () => {
            if(userpref){
                let check = userpref === "dark" ? "dark" : "light"
                setMode(check)
                if(check ==="dark"){
                    document.documentElement.classList.add("dark")
                }
                else{
                    document.documentElement.classList.remove("dark")

                }
            }
            else{
                let check = mediaQuery.matches ? "dark" : "light"
                setMode(check)

                if(check ==="dark"){
                    document.documentElement.classList.add("dark")
                }
                else{
                    document.documentElement.classList.remove("dark")

                }
            }
        }

        mediaQuery.addEventListener("change", handleChange)

        return () => mediaQuery.removeEventListener("change", handleChange)

    }, [])

    useEffect(() => {
        if(mode === "dark"){
            window.localStorage.setItem("theme", "dark")
        }
        else{
            window.localStorage.setItem("theme", "light")
            document.documentElement.classList.remove("dark")
        }
    }, [mode])

  return [mode, setMode]
}

export default useThemSwitcher