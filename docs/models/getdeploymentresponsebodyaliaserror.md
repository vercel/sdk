# GetDeploymentResponseBodyAliasError

An object that will contain a `code` and a `message` when the aliasing fails, otherwise the value will be `null`

## Example Usage

```typescript
import { GetDeploymentResponseBodyAliasError } from "@vercel/sdk/models/getdeploymentop.js";

let value: GetDeploymentResponseBodyAliasError = {
  code: "<value>",
  message: "<value>",
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `code`             | *string*           | :heavy_check_mark: | N/A                |
| `message`          | *string*           | :heavy_check_mark: | N/A                |