# EightyThree

The payload of the event, if requested.

## Example Usage

```typescript
import { EightyThree } from "@vercel/sdk/models/usereventpayload80deployment.js";

let value: EightyThree = {
  id: "<id>",
  value: "<value>",
  name: "<value>",
  domain: "evil-editor.biz",
  type: "<value>",
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `id`               | *string*           | :heavy_check_mark: | N/A                |
| `value`            | *string*           | :heavy_check_mark: | N/A                |
| `name`             | *string*           | :heavy_check_mark: | N/A                |
| `domain`           | *string*           | :heavy_check_mark: | N/A                |
| `type`             | *string*           | :heavy_check_mark: | N/A                |