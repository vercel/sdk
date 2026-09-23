# Documents

A single document included in a bulk compliance download.

## Example Usage

```typescript
import { Documents } from "@vercel/sdk/models/thirtynine.js";

let value: Documents = {
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