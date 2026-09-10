# CreateRepositoryRequestBody

## Example Usage

```typescript
import { CreateRepositoryRequestBody } from "@vercel/sdk/models/createrepositoryop.js";

let value: CreateRepositoryRequestBody = {
  projectId: "<id>",
  name: "nginx",
};
```

## Fields

| Field                                                | Type                                                 | Required                                             | Description                                          | Example                                              |
| ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- |
| `projectId`                                          | *string*                                             | :heavy_check_mark:                                   | Project ID. Missing or empty values return HTTP 400. |                                                      |
| `name`                                               | *string*                                             | :heavy_check_mark:                                   | Single Docker repository name component.             | nginx                                                |