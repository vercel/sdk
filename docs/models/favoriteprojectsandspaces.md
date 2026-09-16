# FavoriteProjectsAndSpaces

A list of projects and spaces across teams that a user has marked as a favorite.

## Example Usage

```typescript
import { FavoriteProjectsAndSpaces } from "@vercel/sdk/models/authuser.js";

let value: FavoriteProjectsAndSpaces = {
  projectId: "<id>",
  teamId: "<id>",
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `projectId`        | *string*           | :heavy_check_mark: | N/A                |
| `teamId`           | *string*           | :heavy_check_mark: | N/A                |