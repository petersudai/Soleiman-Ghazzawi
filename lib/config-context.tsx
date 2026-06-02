'use client'

import { createContext, useContext } from 'react'
import { config as defaultConfig } from '@/config/professional'
import type { Config } from '@/config/professional'

// Shared config shape — both EN and AR configs satisfy this
export type AnyConfig = Config

const ConfigContext = createContext<AnyConfig>(defaultConfig as AnyConfig)

export function ConfigProvider({
  config,
  children,
}: {
  config: AnyConfig
  children: React.ReactNode
}) {
  return (
    <ConfigContext.Provider value={config}>{children}</ConfigContext.Provider>
  )
}

export function useConfig(): AnyConfig {
  return useContext(ConfigContext)
}
