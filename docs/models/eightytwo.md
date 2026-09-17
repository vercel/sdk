# EightyTwo

The payload of the event, if requested.

## Example Usage

```typescript
import { EightyTwo } from "@vercel/sdk/models/retention.js";

let value: EightyTwo = {
  documentId: "<id>",
  fingerprint: "<value>",
  slug: "<value>",
  title: "<value>",
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `documentId`       | *string*           | :heavy_check_mark: | N/A                |
| `fingerprint`      | *string*           | :heavy_check_mark: | N/A                |
| `slug`             | *string*           | :heavy_check_mark: | N/A                |
| `title`            | *string*           | :heavy_check_mark: | N/A                |