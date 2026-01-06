# ApproveRollingReleaseStageResponseBody

The response format for rolling release endpoints that return rolling release information

## Example Usage

```typescript
import { ApproveRollingReleaseStageResponseBody } from "@vercel/sdk/models/approverollingreleasestageop.js";

let value: ApproveRollingReleaseStageResponseBody = {
  rollingRelease: {
    state: "ACTIVE",
    currentDeployment: {
      name: "my-shop@main",
      createdAt: 1716206500000,
      id: "dpl_abc123",
      target: "production",
      readyState: "READY",
      readyStateAt: 1716206800000,
      source: "git",
      url: "my-shop.vercel.app",
    },
    canaryDeployment: {
      name: "my-shop@9c7e2f4",
      createdAt: 1716210100000,
      id: "dpl_def456",
      target: "production",
      readyState: "READY",
      readyStateAt: 1716210400000,
      source: "git",
      url: "9c7e2f4-my-shop.vercel.app",
    },
    queuedDeploymentId: "dpl_ghi789",
    advancementType: "manual-approval",
    stages: [
      {
        index: 0,
        isFinalStage: false,
        targetPercentage: 5,
        requireApproval: true,
        duration: null,
      },
      {
        index: 1,
        isFinalStage: false,
        targetPercentage: 25,
        requireApproval: true,
        duration: null,
      },
      {
        index: 2,
        isFinalStage: false,
        targetPercentage: 60,
        requireApproval: true,
        duration: null,
      },
      {
        index: 3,
        isFinalStage: true,
        targetPercentage: 100,
        requireApproval: false,
        duration: null,
      },
    ],
    activeStage: {
      index: 1,
      isFinalStage: false,
      targetPercentage: 25,
      requireApproval: true,
      duration: null,
    },
    nextStage: {
      index: 2,
      isFinalStage: false,
      targetPercentage: 60,
      requireApproval: true,
      duration: null,
    },
    startedAt: 1716210500000,
    updatedAt: 1716210600000,
  },
};
```

## Fields

| Field                                                                                                          | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `rollingRelease`                                                                                               | [models.ApproveRollingReleaseStageRollingRelease](../models/approverollingreleasestagerollingrelease.md)       | :heavy_check_mark:                                                                                             | Rolling release information including configuration and document details, or null if no rolling release exists |