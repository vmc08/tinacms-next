import { Facebook, Instagram, Github, Twitter, Dribbble } from '@icons/index'

const ICON_MAP = {
  facebook: Facebook,
  instagram: Instagram,
  github: Github,
  twitter: Twitter,
  dribbble: Dribbble,
}

export type IconType = keyof typeof ICON_MAP

export const getSocialIcon = (type: IconType) => ICON_MAP[type] || null
