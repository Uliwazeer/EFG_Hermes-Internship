Don't Forget Create Your Account On Azure DevOps
### Account
![Account_Azure_DevOps](https://github.com/user-attachments/assets/5a4bb935-2860-4793-9e79-664d23984f27)


Azure DevOps Services | Azure DevOps Server 2022 - Azure DevOps Server 2019

Once you have your sprint plan in place, you'll execute that plan during the sprint. In your daily Scrum meetings, your team can view progress made to backlog items and tasks from the sprint Taskboard.

Your Taskboard provides a visualization of flow and status of each sprint task. With it, you can focus on the status of backlog items and work assigned to each team member. It also summarizes the total amount of Remaining Work to complete for a task and within a column.

In this article you'll learn how to:

Open the sprint Taskboard for your team
Customize your Taskboard
Use your Taskboard to review progress during daily scrum meetings
Filter and group work items on your Taskboard
Update the status of tasks through drag-and-drop
Update remaining work
Close out a sprint


### Prerequisites
Connect to a project. If you don't have a project yet, create one.
Get added to a project as a member of the Contributors or Project Administrators security group. To get added, Add users to a project or team.
To add work items and exercise all board features, you must be granted Basic access or higher. Users granted Stakeholder accesses have limited access to features. For more information, see Stakeholder access quick reference.
To view or modify work items, you must have your View work items in this node and Edit work items in this node permissions set to Allow. 
By default, the Contributors group has this permission set. For more information, see Set permissions and access for work tracking.



Open the sprint Taskboard for your team
From your web browser, open the sprint backlog for your team.

Check that you've selected the right Project
Choose Boards>Sprints
Select the correct Team from the team selector menu
Choose Taskboard
 ### 00. Image 1
![open-sprint-backlog-taskboard-s155-co](https://github.com/user-attachments/assets/99e8d400-c99d-4f11-9a8d-e431885e8791)

To choose another team, open the selector and select a different team or choose the View sprints directory or Browse all sprints option. Or, you can enter a keyword in the search box to 
filter the list of team backlogs for the project.
### 01. Image 2
![team-selector-sprints-agile](https://github.com/user-attachments/assets/ad9bd5fc-fe8a-475e-8dd7-344aba7dbbc8)


To choose a different sprint than the one shown, open the sprint selector and choose the sprint you want.
### 02. Image 3
![team-selector-sprints-agile](https://github.com/user-attachments/assets/14423827-a94e-4d99-b93a-edb114bfc0a1)


To show cards based on their backlog-to-task groupings, choose  View options and select Stories (for Agile), Issues (for Basic), Backlog items (for Scrum),and Requirements (for CMMI).
### 03. Image 4
![team-selector-sprints-agile](https://github.com/user-attachments/assets/8eb402ce-db92-42c3-89cf-30cdad44a56e)


You can Collapse All or Expand All rows, and selectively expand expand icon and collapse collapse icon a row to focus on a particular item and its tasks.
### 04. Image 5
![group-items-all-taskboard-agile](https://github.com/user-attachments/assets/919eab85-2230-418a-9052-4d710b869170)


With this view, you can focus on the work completed and the work remaining for each individual team member. You can quickly see who may need help with completing their sprint tasks. This view shows items and tasks assigned to the selected team member.
To filter on the tasks for a specific team member, choose the  filter icon, and then select their name from the Assigned to filter box.
### 05. Image 6
![group-by-people](https://github.com/user-attachments/assets/5398038d-3054-4383-9e99-dac284a3cea5)

Choose the  view options icon and select People.
Only those team members with tasks assigned to them are listed. All their tasks are shown as cards under their column state.
### 06 Image 7
![group-items-all-taskboard-agile](https://github.com/user-attachments/assets/c878796a-c4ed-46ed-b25b-aa932aa42751)


To filter on the tasks for a specific team member, choose Filter  , and then select their name from the Assigned to filter box. For more information, see Interactively filter backlogs, boards, queries, and plans.
### 07. Image 8 
![filter-by-a-team-member](https://github.com/user-attachments/assets/f0eafae3-6417-4b3d-b4ef-798413bd729b)


Update a task's status
Drag tasks to a downstream column to reflect if they are in progress or completed.
### 08. Image 9
![alm_tb_move_to_done](https://github.com/user-attachments/assets/50576a01-6b40-487d-bc42-ac487d989990)


Updating Remaining Work, preferably before the daily Scrum meeting, helps the team stay informed of the progress being made. It also ensures a smoother burndown chart.
Each team member can review the tasks they've worked on and estimate the work remaining. If they've discovered that it's taking longer than expected to complete, they should increase the Remaining Work for the task. Remaining Work should always reflect exactly how much work the team member estimates is remaining to complete the task.
### 09. Image 10
![update-hours](https://github.com/user-attachments/assets/4d641041-d929-4143-98a6-e44d8e67fc8c)


Reduce the number of items on the taskboard
If you exceed the number of items allowed on your taskboard, you'll receive a message indicating that you need to reduce the number of items. The maximum number of items includes work item types included in the Requirement and Task categories.
You can reduce the number of items on the taskboard by moving them to the backlog or another sprint. When you move a parent PBI or user story, all active child tasks (State not equal to Done or Closed) automatically move with the parent item.
From the taskboard, drag the PBI or user story from the first column onto the backlog or future sprint. All child tasks automatically move with the parent item.
From the sprint backlog, multi-select the items to move and then select the context menu for an item. Then, select the iteration to move them to.
### 10. Image 11
![sprint-backlog-multi-select-non-sequential-items](https://github.com/user-attachments/assets/2b4e8bdf-7780-490d-af8f-f62a8eae5df8)


.>### REFERENCE
https://learn.microsoft.com/en-us/azure/devops/boards/sprints/task-board?view=azure-devops

