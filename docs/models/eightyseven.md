# EightySeven

The payload of the event, if requested.

## Example Usage

```typescript
import { EightySeven } from "@vercel/sdk/models/userevent.js";

let value: EightySeven = {
  projectName: "<value>",
  branch: "<value>",
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `projectName`      | *string*           | :heavy_check_mark: | N/A                |
| `branch`           | *string*           | :heavy_check_mark: | N/A                |