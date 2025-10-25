# ResponseBodyAliasError

An object that will contain a `code` and a `message` when the aliasing fails, otherwise the value will be `null`

## Example Usage

```typescript
import { ResponseBodyAliasError } from "@vercel/sdk/models/getdeploymentop.js";

let value: ResponseBodyAliasError = {
  code: "<value>",
  message: "<value>",
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `code`             | *string*           | :heavy_check_mark: | N/A                |
| `message`          | *string*           | :heavy_check_mark: | N/A                |