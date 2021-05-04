import { BaseRange, BaseText } from '@moonship-fe/slate'
import { ReactEditor } from './plugin/react-editor'

declare module 'slate' {
  interface CustomTypes {
    Editor: ReactEditor
    Text: BaseText & {
      placeholder: string
    }
    Range: BaseRange & {
      placeholder?: string
    }
  }
}
