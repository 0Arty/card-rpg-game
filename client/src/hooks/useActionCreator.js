import { bindActionCreators } from "@reduxjs/toolkit"
import { useMemo } from "react"
import { useDispatch } from "react-redux"


export const useActionCreators = (actions) => {
    const dispatch = useDispatch()
    // eslint-disable-next-line
    return useMemo(() => bindActionCreators(actions, dispatch), [])
  }