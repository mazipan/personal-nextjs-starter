const basePath = process.env.NEXT_PUBLIC_BASE_PATH

export const BASE_PATH = basePath || ''
export const BRAND_TITLE = 'Brand'
export const BRAND_LONG_DESC = 'Long description'
export const BRAND_META_IMAGE = `https://og.thcl.dev/api/gradient?description=${BRAND_LONG_DESC}&siteName=${BRAND_TITLE}&theme=dark`
