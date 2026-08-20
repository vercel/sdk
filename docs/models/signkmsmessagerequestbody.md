# SignKmsMessageRequestBody

## Example Usage

```typescript
import { SignKmsMessageRequestBody } from "@vercel/sdk/models/signkmsmessageop.js";

let value: SignKmsMessageRequestBody = {
  message: "<value>",
};
```

## Fields

| Field                                | Type                                 | Required                             | Description                          |
| ------------------------------------ | ------------------------------------ | ------------------------------------ | ------------------------------------ |
| `message`                            | *string*                             | :heavy_check_mark:                   | Base64-encoded message to be signed. |