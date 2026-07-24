# CreateDeploymentResponseBodyAliasError

An object that will contain a `code` and a `message` when the aliasing fails, otherwise the value will be `null`

## Example Usage

```typescript
import { CreateDeploymentResponseBodyAliasError } from "@vercel/sdk/models/createdeploymentresponsebody.js";

let value: CreateDeploymentResponseBodyAliasError = {
  code: "<value>",
  message: "<value>",
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `code`             | *string*           | :heavy_check_mark: | N/A                |
| `message`          | *string*           | :heavy_check_mark: | N/A                |