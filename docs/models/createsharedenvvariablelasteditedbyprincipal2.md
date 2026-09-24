# CreateSharedEnvVariableLastEditedByPrincipal2

The principal that last edited this env var, when the editor id resolves to a known user or app. Lets clients render the right avatar instead of assuming every editor is a user.

## Example Usage

```typescript
import { CreateSharedEnvVariableLastEditedByPrincipal2 } from "@vercel/sdk/models/createsharedenvvariableop.js";

let value: CreateSharedEnvVariableLastEditedByPrincipal2 = {
  id: "<id>",
  name: "<value>",
  type: "app",
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `avatar`           | *string*           | :heavy_minus_sign: | N/A                |
| `id`               | *string*           | :heavy_check_mark: | N/A                |
| `name`             | *string*           | :heavy_check_mark: | N/A                |
| `type`             | *"app"*            | :heavy_check_mark: | N/A                |