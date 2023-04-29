/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_APP_TITLE: string
  readonly VITE_API_BASE_URL: string
  readonly VITE_TEMP_AUTH: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
